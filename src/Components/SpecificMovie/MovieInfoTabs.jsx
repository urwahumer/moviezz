import React from "react";
import { currencyFormatter, convertNumberToTime } from "../../Utils/utility";

const MovieInfoTabs = ({ data }) => {
  return (
    // <div class="container-fluid movie-info-tabs">
    //   <div class="row">
    //     <div class="col-md-6">
    //       <div class="tab" role="tabpanel">
    //         <ul class="nav nav-tabs" role="tablist">
    //           <li role="presentation" class="active">
    //             <a
    //               href="#Section1"
    //               aria-controls="home"
    //               role="tab"
    //               data-toggle="tab"
    //             >
    //               <span>
    //                 <i class="fa fa-money" aria-hidden="true"></i>
    //               </span>{" "}
    //               Budget
    //             </a>
    //           </li>
    //           <li role="presentation">
    //             <a
    //               href="#Section2"
    //               aria-controls="profile"
    //               role="tab"
    //               data-toggle="tab"
    //             >
    //               <span>
    //                 <i class="fa fa-clock-o" aria-hidden="true"></i>
    //               </span>{" "}
    //               Duration
    //             </a>
    //           </li>
    //           <li role="presentation">
    //             <a
    //               href="#Section3"
    //               aria-controls="messages"
    //               role="tab"
    //               data-toggle="tab"
    //             >
    //               <span>
    //                 <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
    //               </span>{" "}
    //               Release Date
    //             </a>
    //           </li>
    //         </ul>

    //         <div class="tab-content tabs">
    //           <div
    //             role="tabpanel"
    //             class="tab-pane fade in active"
    //             id="Section1"
    //           >
    //             <h3>Budget</h3>
    //             <p>{currencyFormatter(data.budget)}</p>
    //           </div>
    //           <div role="tabpanel" class="tab-pane fade" id="Section2">
    //             <h3>Duration</h3>
    //             <p>{convertNumberToTime(data.runtime)}</p>
    //           </div>
    //           <div role="tabpanel" class="tab-pane fade" id="Section3">
    //             <h3>Relaese date</h3>
    //             <p>{data.release_date}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid movie-info-tabs">
      <div classNmae="row d-flex table-header ">
        <div className="col-4 py-3">
          <i class="fa fa-money" aria-hidden="true"></i>
        </div>
        <div className="col-4 py-3">
          <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
        </div>
        <div className="col-4 py-3">
          <i class="fa fa-clock-o" aria-hidden="true"></i>
        </div>
      </div>
      <div classNmae="row d-flex table-header  text">
        <div className="col-4 py-3">
          {data.budget && currencyFormatter(data.budget)}
        </div>
        <div className="col-4 py-3">{data && data.release_date}</div>
        <div className="col-4 py-3">
          {data.runtime && convertNumberToTime(data.runtime)}
        </div>
      </div>
    </div>
  );
};

export default MovieInfoTabs;
