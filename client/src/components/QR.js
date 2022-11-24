// import React from "react";
import QRCode from "react-qr-code";

// export default function QR(){
//     return(
//         <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
//     <QRCode
//     size={256}
//     style={{ height: "auto", maxWidth: "100%", width: "100%" }}
//     value="hello"
//     viewBox={`0 0 256 256`}
//     />
// </div>
//     )
// }

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function QR(){
    return(
        <div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value="hey"
    viewBox={`0 0 256 256`}
    />
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
    )
}