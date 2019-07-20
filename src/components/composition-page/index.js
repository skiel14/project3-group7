import React from 'react';
import './style.css';
import NavBarComponent from '../navbar'

// import axios from 'axios'
// import scipt from '../../../public/static/script'

const CompostionPage = () => (<>
 <NavBarComponent />
  <div className="flight">
    <iframe id="score1" title="score"
      src="https://www.noteflight.com/embed/fcfd6d0bc0770f67cdbe1b8129456521fec090a0?scale=1.5&role=template&app=html5"
      width="800" height="400">
    </iframe>
</div>

  </>
)







export default CompostionPage
