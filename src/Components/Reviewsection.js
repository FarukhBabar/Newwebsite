import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewSection = () => {
  const reviews = [
    {
      name: "Samantha Clark",
      review: "Best online store in the UK. I have been shopping from here for the last few years, and it will continue in future.",
      time: "Yanky, 1 day ago",
    },
    {
      name: "Danial Victory",
      review: "The best experience I have ever faced. All the staff is cooperative, and they replied to my enquiry within no time.",
      time: "Yanky, 1 day ago",
    },
    {
      name: "Sara Walser",
      review: "I have purchased many daily-use items from Home Essentials Hive, the staff is cooperative, and they offer products at the best price.",
      time: "Yanky, 1 day ago",
    },
    {
      name: "Kathrin",
      review: "The customer care service was excellent. They helped me choose the perfect product and listened to all the instructions carefully.",
      time: "Yanky, 1 day ago",
    },
  ];

  return (
    <div className="review-section py-5">
      <p className="title text-center mb-4">Customer Reviews</p>

      {/* Swiper for mobile screens */}
      <div className="d-md-none">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="pb-5"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="card mx-auto" style={{ maxWidth: "90%" }}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="ratings text-warning me-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="rating-color" />
                      ))}
                    </div>
                    <h6 className="rating-text bg-success text-white px-2 rounded-pill">Verified</h6>
                  </div>
                  <h5 className="card-title mb-2">{review.name}</h5>
                  <p className="card-text text-muted mb-3">{review.review}</p>
                  <p className="text-end text-secondary">{review.time}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid layout for larger screens */}
      <div className="row d-none d-md-flex justify-content-center">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card" style={{ width: "105%", height: "250px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              <div className="card-body ">
                <div className="d-flex align-items-center ">
                  <div className="ratings text-warning me-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="rating-color" />
                    ))}
                  </div>
                  <h6 className="rating-text bg-success text-white px-2 rounded-pill mt-2">Verified</h6>
                </div>
                <h6 className="card-title">{review.name}</h6>
                <p className="card-text text-muted mb-4">{review.review}</p>
                <p className="text-end text-secondary">{review.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
