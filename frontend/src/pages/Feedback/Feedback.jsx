import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import VibeOMeter from "./VibeMeter";

function Feedback() {
  const [user, setUser] = useState([]);
  const [rating, setRating] = useState();
  const [ratingArray, setRatingArray] = useState([]);
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  

  
  // // Users
  // const users = async () => {
  //   await axios
  //     .get("http://localhost:5000/user")
  //     .then((userResult) => {
  //       setUser(userResult?.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  console.log("Rating araay: ", ratingArray);
  // Add Data
  // const addData = () => {
  //   axios
  //     .get("http://localhost:5000/addData")
  //     .then((res) => {
  //       console.log("addData", res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // Remove Data
  // const removeData = () => {
  //   axios
  //     .get("http://localhost:5000/removeData")
  //     .then((res) => {})
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Get all Data
  const getData = () => {
    axios
      .get("http://localhost:5000/getData")
      .then((res) => {
        setData(res.data.feedbackData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Emotions

  const review = async () => {
    await axios
      .get("http://localhost:5000/eventRating")
      .then((res) => {
        // Event Rating
        setRatingArray(res.data);
        let sum = 0;
        for (let i = 0; i < res.data.length; i++) {
          sum = sum + parseFloat(res.data[i].eventrating);
        }

        // console.log("Resultant Rating : ", Math.floor(sum / res.data.length));

        const ratingResult = Math.floor(sum / res.data.length);

        setRating(ratingResult + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let feeling;

  if (rating > 0 && rating < 1) {
    feeling = "angry";
  }

  if (rating >= 1 && rating < 2) {
    feeling = "dissapointed";
  } else if (rating >= 2 && rating < 3) {
    feeling = "boredom";
  } else if (rating >= 3 && rating < 4) {
    feeling = "appreciation";
  } else if (rating >= 4 && rating < 5) {
    feeling = "joy";
  } else {
    feeling = "overwhelmed";
  }

  console.log("feeling---> ", feeling);
  console.log("Calculated Rating---> ", rating);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    review();
    // users();
  }, []);

  // console.log("Rating: ", rating);

  return (
    <>
      <main className="content feedback">
        <div className="feedback__banner">
          <div className="container--fluid">
            <div className="container">
              <div className="row">
                <div className="col_sm_12 col_md_12 col_lg_6">
                  <div className="feedback__banner--info">
                    <div className="feedback__banner--icon">
                      <img
                        src={require(`../../assets/img/${feeling}.svg`)}
                        alt="Emoji"
                      />
                    </div>
                    <h2 className="feedback__banner--title">
                      {feeling} experience
                    </h2>
                    <h3 className="feedback__banner--subtitle">
                      Your Vibe-O-Meter reading exits us too
                    </h3>
                    <div className="feedback__banner--description">
                      We are happy too because we successfully keep you happy
                      during this visit to Sindalah City.
                    </div>
                  </div>
                </div>

                <div className="col_sm_12 col_md_12 col_lg_6">
                  <VibeOMeter currentEmotion={rating} />
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop--filter"></div>
        </div>

        {/* Middle  */}

        <div className="feedback__cards">
          <div className="container">
            <h2 className="feedback__title">
              Hi &nbsp;
              {/* {user?.data?.[1]?.name} */}
              Punit
              <br />
              here are the glimpse of your feedback shared with us.
            </h2>
            <ul className="feedback__list">
              {
             
             data.map((item, index) => {
                return <Cards setModal={(visible) => setModal(visible)} modal={modal} key={index} item={item} userData={user.data} />;
              })
              
              }
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Feedback;
