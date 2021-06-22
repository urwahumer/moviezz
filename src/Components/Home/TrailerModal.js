import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../../redux/actions/movies";
import { Spin } from "antd";
import $ from "jquery";

const TrailerModal = ({ id, image }) => {
  const [modal, setModal] = useState(id);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.movies.specificVideoInfo[0]);

  console.log(id);
  useEffect(() => {
    getVideoId(id);
  }, [id]);
  const getVideoId = async id => {
    setLoading(true);
    await dispatch(getVideo(id));
    setModal(id);

    setLoading(false);
  };
  const handleVideoPause = () => {
    console.log("hallo");
    $(".close").click(function() {
      $("iframe").attr("src", $("iframe").attr("src"));
    });
  };

  return (
    <div>
      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        data-backdrop="static"
        data-dismiss="modal"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={handleVideoPause}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <Spin spinning={loading}>
              <div style={{ height: "500px" }}>
                {data && data.key !== "" && (
                  <iframe
                    id="youtube_frame"
                    class="yt_player_iframe"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${data && data.key}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </Spin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
