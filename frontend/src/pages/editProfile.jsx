import React, { useState } from "react";
import ProfileImg from "../assets/img/music.png";
import  { useFormik } from "formik";
import { validation } from "../components/profileValidation";
import axios from "axios";

const EditProfile = () => {
  const [images, setImages] = useState([
    { src: require("../assets/img/golf.png"), isLiked: false, text: "Golfs" },
    { src: require("../assets/img/music.png"), isLiked: false, text: "Music" },
    {
      src: require("../assets/img/exploring.png"),
      isLiked: false,
      text: "Rooms",
    },
    {
      src: require("../assets/img/cooking&dinner.png"),
      isLiked: false,
      text: "Exploring",
    },
    {
      src: require("../assets/img/standup-comedy.png"),
      isLiked: false,
      text: "Socializing",
    },
    {
      src: require("../assets/img/socializing.png"),
      isLiked: false,
      text: "Cooking & dining",
    },
    {
      src: require("../assets/img/plays.png"),
      isLiked: false,
      text: "Plays",
    },
    {
      src: require("../assets/img/chinese-food.png"),
      isLiked: false,
      text: "Chinese Food",
    },
    {
      src: require("../assets/img/screaming-child.png"),
      isLiked: false,
      text: "Screaming Child",
    },
    {
      src: require("../assets/img/walking-for-long.png"),
      isLiked: false,
      text: "Walking for long",
    },
    {
      src: require("../assets/img/water-sports.png"),
      isLiked: false,
      text: "Water Sports",
    },
  ]);

  const [selectedImageText, setSelectedImageText] = useState([]);
  const [image, setImage] = useState();
  const thumbHandlerOnImg = (index) => {
    const updatedImages = [...images];
    const selectedText = updatedImages[index].text;
    updatedImages[index].isLiked = !updatedImages[index].isLiked; //Switching the thumbs on images

    if (updatedImages[index].isLiked) {
      // Adding text in array with previous data
      setSelectedImageText((prevSelectedImageText) => [
        ...prevSelectedImageText,
        selectedText,
      ]);
    } else {
      // To remove data in the array for unchecked images
      setSelectedImageText((prevSelectedImageText) =>
        prevSelectedImageText.filter((text) => text !== selectedText)
      );
    }
    setImages(updatedImages);
  };

  const formSubmit = () => {
    let formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("DOB", values.DOB);
    formData.append("interests", selectedImageText);
    formData.append("file", image);

    const data = axios.post("http://localhost:5000/api/v1", formData);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "Charlie.mathwe@gmail.com",
        phone: "",
        DOB: "",
        interests: [],
      },
      validationSchema: validation,
      onSubmit: () => {
        formSubmit();
      },
    });
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <main className="content">
          <div className="profile">
            <div className="container">
              <div className="profile__page userPreferences">
                <h2 className="profile__title">Edit Charlie's profile</h2>
                <div className="profile__edit">
                  <div className="profile__list">
                    <div className="profile__list--item active">
                      <div className="profile__info">
                        <div className="profile__image">
                          <div className="profile__image--abstract"></div>
                          <div className="profile__main--image">
                            <img src={ProfileImg} alt="profile-img" />
                          </div>
                          <div className="profile__image--overlay">
                            <input
                              className="profile-uploads-input"
                              type="file"
                              accept="image/jpeg, image/png"
                              onChange={(e) => setImage(e.target.files[0])}
                              name="file"
                            />
                          </div>
                          <div className="profile__icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="27.232"
                              height="26"
                              viewBox="0 0 27.232 26"
                            >
                              <g
                                id="Icon_feather-edit-3"
                                data-name="Icon feather-edit-3"
                                transform="translate(-3.5 -3.318)"
                              >
                                <path
                                  id="Path_25"
                                  data-name="Path 25"
                                  d="M18,30H31.5"
                                  transform="translate(-1.768 -1.682)"
                                  fill="none"
                                  stroke="#fff"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                                <path
                                  id="Path_26"
                                  data-name="Path 26"
                                  d="M23.356,5.189a2.968,2.968,0,0,1,4.19,4.205L10.087,26.916,4.5,28.318l1.4-5.607Z"
                                  transform="translate(0 0)"
                                  fill="none"
                                  stroke="#fff"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile__content">
                    <div className="form__group">
                      <label className="form__label">
                        What should we call you?
                      </label>
                      <input
                        className={
                          errors.name && touched.name
                            ? "form__input error"
                            : "form__input"
                        }
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="name"
                        name="name"
                        type="text"
                        placeholder=""
                      />
                      {errors.name && touched.name && (
                        <p className="error-text">{errors.name}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label className="form__label">
                        What's your email address?
                      </label>
                      <input
                        className="form__input"
                        value={values.email}
                        id="email"
                        name="email"
                        type="email"
                        placeholder=""
                       onChange={handleChange}
                      />
                    </div>
                    <div className="form__group">
                      <label className="form__label">
                        On which number can we contact you?
                      </label>
                      <input
                        className={
                          errors.phone && touched.phone
                            ? "form__input error"
                            : "form__input"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="phone"
                        name="phone"
                        value={values.phone}
                        type="number"
                        placeholder=""
                      />
                      {errors.phone && touched.phone && (
                        <p className="error-text">{errors.phone}</p>
                      )}
                    </div>
                    <div className="form__group">
                      <label className="form__label">
                        When can we wish a happy birthday?
                      </label>
                      <input
                        className={
                          errors.DOB && touched.DOB
                            ? "form__input error"
                            : "form__input"
                        }
                        type="date"
                        placeholder=""
                        value={values.DOB}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="DOB"
                        name="DOB"
                      />
                      {errors.DOB && touched.DOB && (
                        <p className="error-text">{errors.DOB}</p>
                      )}
                    </div>
                    <ul className="activity__list">
                      {images?.map((image, index) => {
                        return (
                          <li
                            key={index}
                            className={`activity__list--item ${
                              image.isLiked ? "active" : null
                            }`}
                            onClick={() => {
                              thumbHandlerOnImg(index);
                            }}
                          >
                            <div className="activity__info">
                              <div className="activity__image">
                                <img src={image.src} alt="activity" />
                                <div className="activity__image--overlay"></div>
                                <div className="activity__name">
                                  {image.text}
                                </div>
                              </div>
                              <div className="activity__selected">
                                <div className="icon-thumbs-up"></div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="form__group m-0">
                      <label className="form__label">
                        Please let us know if you have some interests
                      </label>
                      <input
                        disabled
                        type="text"
                        className="form__input"
                        value={selectedImageText.join(", ")}
                        onChange={() => setSelectedImageText([])}
                        placeholder="Add multiple interests comma ( , ) separated"
                        required
                      />
                    </div>
                    <div className="btn--wrap">
                      <button className="btn btn__red" type="submit">
                        Save
                      </button>
                      <button className="btn btn__transparent">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </form>
    </div>
  );
};

export default EditProfile;
