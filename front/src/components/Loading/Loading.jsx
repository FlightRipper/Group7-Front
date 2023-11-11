// import React from "react";
// import "./Loading.css";
// import ReactLoading from "react-loading";

// export default function Loading() {
//   return (
//     <div>
//       <div className="loading_container">
//         <ReactLoading
//           type="spinningBubbles"
//           // color="white"
//           height={100}
//           width={100}
//           // background-color="#2f5a8e"
//         />
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./Loading.css";
import ReactLoading from "react-loading";

export default function Loading({ backgroundColor, textColor }) {
  return (
    <div>
      <div
        className="loading_container-abc"
        style={{ backgroundColor, color: textColor }}
      >
        <ReactLoading type="spinningBubbles" color={textColor} />
      </div>
    </div>
  );
}



