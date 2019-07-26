import React from 'react';
import './style.css';
import NavBarComponent from '../navbar'
import {Col, Row, Container, Button} from 'react-bootstrap';



 class CompositionDynamic extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        NFClientFunctionObjects: {
          ScoreView: function(arg0) {
            var PATH_PREFIX = "/embed/";

            var self = this;

            var iframe, urlPrefix, id;

            self.getSubstringIndex = function(str, substring, n) {
              var times = 0, index = null;
              while (times < n && index !== -1) {
                  index = str.indexOf(substring, index+1);
                  times++;
              }

              return index;
            }

            if (typeof(arg0) == "string") {

              id = arg0;
              var scoreId = arguments[1];
              var options = arguments[2];

              // Create the iframe element hosting this ScoreView
              var el = document.getElementById(id);
              var iframe = document.createElement('iframe');

              // Determine its origin
              const protocol = 'https';
              if (options.protocol) {
                console.log('The "protocol" argument is deprecated, as all assets are served over https by default');
              }
              var host = options.host || 'www.noteflight.com';
              urlPrefix = protocol + '://' + host;

              var staticViewerLocation = options.staticViewerLocation;

              // Pass through viewer parameters as query arguments in the iframe URL
              var params = '';
              var componentName = '';


              self.iterateObject = function(obj, componentName) {
                for (var property in obj) {
                  if (obj.hasOwnProperty(property)) {
                    if (typeof obj[property] == "object") {
                      self.iterateObject(obj[property], componentName + property + '.');
                    } else {
                      if (params) {
                        params += '&';
                      }

                      params += encodeURIComponent(componentName + property) + '=' + encodeURIComponent(obj[property]);
                    }
                  }
                }
              }

              var windowWidth = options.width || 800;
              var windowHeight = options.height || 600;

              // It creates the params string
              if (options.viewParams) {
                self.iterateObject(options.viewParams, '');
                self.iterateObject({ windowWidth: windowWidth, windowHeight: windowHeight }, '');
              }

              var url = "";
              if (staticViewerLocation) {
                url = staticViewerLocation;
              } else {
                url = urlPrefix + PATH_PREFIX + encodeURIComponent(scoreId);
              }

              if (params) {
                url += '?' + params;
              }

              // Configure the iframe
              iframe.setAttribute('id', id);
              iframe.setAttribute('src', url);
              iframe.setAttribute('width', windowWidth);
              iframe.setAttribute('height', windowHeight);
              iframe.setAttribute('allow', "autoplay");
              iframe.style.border = '1px solid #f0f0f0';

              // Now jam it into the DOM and we're done!
              el.parentNode.insertBefore(iframe, el);
              el.parentNode.removeChild(el);
            }
            else {
              // We have been provided with an already-existing iframe, so just figure out its
              // origin and connect to it.

              iframe = arg0;

              id = iframe.getAttribute('id');
              var src = iframe.getAttribute('src')
              urlPrefix = src.substring(0, self.getSubstringIndex(src, "/", 3));
            }

            var initInterval;     // handle to interval timer for initialization
            var invocationId = 0; // callback result ID counter
            var invocationPromises = {};    // table of promises awaiting notification
            var dispatchers = {}; // table of event handler arrays by event Id

            // Set up the listener for postMessage() activity in the iframe
            self.handleMessage = function(e) {
              // If we get an OK-looking event from the origin and iframe we expect, then go ahead and handle it.
              if (e.origin == urlPrefix && e.source == iframe.contentWindow && typeof(e.data) == 'string') {
                var data = {};
                try {
                    data = JSON.parse(e.data);
                } catch (err) {
                }

                if (data.kind == "initialized") {
                  // Yay, we're initialized! Stop trying to do that any more.
                  if (initInterval) {
                    clearInterval(initInterval);
                    initInterval = null;
                  }
                }
                else if (data.kind == "invokeResult") {
                  // Look for an invocation callback that is expecting this return value.
                  if (invocationPromises[data.invocationId]) {
                    invocationPromises[data.invocationId].success(data.result);
                    delete invocationPromises[data.invocationId];
                  }
                }
                else if (data.kind == "noteflightEvent") {
                  // Stamp this event with the associated ID and target of this client, if we have one.
                  if (data.event) {
                    data.event.embedId = id;
                    data.event.target = self;

                    // If this event is "editorReady", pick up the method names to create local stubs
                    if (data.event.type == "editorReady" && data.event.methodNames) {
                      for (var i = 0; i < data.event.methodNames.length; i++) {
                        self.createMethodStub(data.event.methodNames[i]);
                      }
                    }

                    // Forward an API event to any event handler that cares about it.
                    self.dispatchEvent(data.event.type, data.event);
                    self.dispatchEvent('any', data.event);
                  }
                }
              }
            };

            // Send a message to our iframe
            self.dispatchMessage = function(data) {
              if (typeof(JSON) !== 'undefined') {
                iframe.contentWindow.postMessage(JSON.stringify(data), urlPrefix);
              }
            };

            if (window.addEventListener) {
              window.addEventListener('message', self.handleMessage);
            }
            else if (window.attachEvent) {
              window.attachEvent('onmessage', self.handleMessage);
            }

            // Set up a repeating call that will initialize the viewer eventually
            if (typeof(JSON) !== 'undefined') {
              initInterval = setInterval(function() {
                self.dispatchMessage({
                  kind: 'initializeViewer'
                });
              }, 100);
            }
            else {
              throw new Error('Noteflight API requires JSON');
            }

            self.applyMethod = function(methodName, args) {
              var message = {
                kind: 'invokeMethod',
                methodName: methodName,
                args: args
              };

              var promise = {
                doneCallbacks: [],
                done: function(callback) {
                  this.doneCallbacks.push(callback);
                  return this;
                },
                success: function(result) {
                  for (var i = 0; i < this.doneCallbacks.length; i++) {
                    this.doneCallbacks[i](result);
                  }
                }
              };

              var iid = ++invocationId;
              invocationPromises[iid] = promise;
              message.invocationId = iid;

              self.dispatchMessage(message);

              return promise;
            }

            // Create a stub method on this ScoreView object that can be invoked as a proxy
            // for the invocation of the corresponding embedded document method, returning a promise.
            self.createMethodStub = function(methodName) {
              self[methodName] = function() {
                return self.applyMethod(methodName, Array.prototype.slice.call(arguments, 0));
              };
            }

            // Add an event handler. The special eventType value "any" will receive callbacks
            // on all events.
            self.addEventListener = function(eventType, handler) {
              if (!dispatchers[eventType]) {
                dispatchers[eventType] = [];
              }
              dispatchers[eventType].push(handler);
            }

            // Remove an event handler.
            self.removeEventListener = function(eventType, handler) {
              if (dispatchers[eventType]) {
                for (var i = 0; i < dispatchers[eventType].length; i++) {
                  if (dispatchers[eventType][i] === handler) {
                    dispatchers[eventType].splice(i, 1);
                    return true;
                  }
                }
              }
              return false;
            }

            // Dispatch an event to a specific event type.
            self.dispatchEvent = function(eventType, event) {
              if (dispatchers[eventType]) {
                for (var i = 0; i < dispatchers[eventType].length; i++) {
                  dispatchers[eventType][i](event);
                }
              }
            }
          }
        },
        options: {
            width: 800,
            height: 400,
            viewParams: {
              scale: 1.5,
              role: 'template',
              app: 'html5'
            }
        },
        showScore: function(score){
          console.log(JSON.stringify(score, null, "  "))
        }
      }
    }

    componentDidMount(){
      this.score1 = new this.state.NFClientFunctionObjects.ScoreView("noteFlightDiv", 'fcfd6d0bc0770f67cdbe1b8129456521fec090a0', this.state.options)
      document.getElementById("noteFlightDiv").classList.add("flight")
    }

    handleClick = () => {

      this.score1.getScore().done(this.state.showScore)
    }

    render(){
      return(<>
        <NavBarComponent />
        <div id="noteFlightDiv">TestTest123</div>
        <br></br>
        <br></br>
        <Button className="output" variant="light" onClick={this.handleClick.bind(this)}>Output Score to Console</Button>
      </>)
    }
 }

export default CompositionDynamic;
