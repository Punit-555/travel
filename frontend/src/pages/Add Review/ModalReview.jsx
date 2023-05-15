import React, { useEffect, useState } from "react";
import trending1 from "../../assets/img/trending1.jpg";
import StarRating from "./StarRating";
import axios from "axios";
import ModalHeader from "./ModalHeader";
import VibeOMeter from "./VibeOMeter";
// import { useNavigate } from "react-router-dom";

function ModalReview({ setModal, eventData }) {
  // const navigate = useNavigate();
  const [avgValue, setAvgValue] = useState(0);
  const [ratingData, setRatingData] = useState([]);
  const [currentPage, setCurrentPage] = useState(false);
  const [submitButton, setSubmitButton] = useState([]);


  const reviewDetails = [
    { name: "Quality of Event", value: 0 },
    { name: "Services at Event", value: 0 },
    { name: "Facilities of Event", value: 0 },
    { name: "Operator of Event", value: 0 },
    { name: "Staff Politeness", value: 0 },
  ];

  // console.log("Rating data user --> ", ratingData);

  const ratingChangeHandler = (data) => {
    const copy = [...ratingData, data];
    setRatingData(copy);
    let sum = 0;
    for (let index = 0; index < ratingData.length; index++) {
      sum = sum + ratingData[index];
    }
    setAvgValue(sum / ratingData.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    console.log("firs-==================t", eventData)

    const userData = {
      Description: data.get("reviewDesc"),
      AvgRating: Math.floor(avgValue),
      Eventtitle: eventData.eventtitle,
    };

    setCurrentPage(true);
    setSubmitButton(userData);
    // axios
    //     .get("http://localhost:5000/getReview")
    //     .then((res) => {
    //       console.log("Get Data from Backend" ,res.data);
    //       setBackendData(res.rows)

    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
  };

  const submitReview = () => {};

  const vibeOMeterHandler = async () => {
    // navigate('/');
    await axios
      .put("http://localhost:5000/addReview", submitButton)
      .then((res) => {
        // console.log("Updated Succesfully!", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    submitReview();
    vibeOMeterHandler();
  });

  console.log("Hey User data is heree =================", submitButton);

  return (
    <>
      <div id="modal" className="modal">
        <div className="modal-content">
          <ModalHeader setModal={(visible) => setModal(visible)} />

          <div className="modal-body">
            <p>
              Hi Charlie, If you're here on this page, we bet you enjoy this
              event fully. Would you mind to share your valuable feedback review
              with us?
            </p>

            {currentPage ? (
              <VibeOMeter gaugeValue={Math.floor(avgValue)} />
            ) : (
              <>
                <div className="modal-image"></div>
                <div className="card">
                  <div className="card__info">
                    <div className="card__info--image">
                      <img src={trending1} alt="" />
                    </div>
                    <div className="card__info--details">
                      <h4>Surfing at leasure</h4>
                      <p>Nov 10-29</p>
                    </div>
                  </div>
                  <div className="card__review">
                    <div className="rating"></div>
                    <div className="review">
                      <span>5.0</span>(23 reviews)
                    </div>
                  </div>
                </div>
                <div className="ratings__row">
                  {reviewDetails.map((item) => {
                    return (
                      <div key={item.id} className="ratings__row--item">
                        <div className="ratings--title">{item.name}</div>
                        <StarRating
                          name={item.name}
                          setRating={ratingChangeHandler}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className="modal-footer">
            <form onSubmit={handleSubmit}>
              <div className="form__group">
                <textarea
                  name="reviewDesc"
                  id=""
                  rows="5"
                  placeholder="Share your feedback and suggestions about this event.."
                ></textarea>
              </div>
              {!currentPage ? (
                <button className="btn btn__black" id="submitBtn" type="submit">
                  Submit
                </button>
              ) : (
                //VibeOMeter Buttons ;;
                <button
                  className="btn btn__black"
                  id="submitBtn"
                  type="submit"
                  onClick={vibeOMeterHandler}
                >
                  Submit Button
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalReview;
