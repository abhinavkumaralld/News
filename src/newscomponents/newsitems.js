import React, { Component } from "react";

export default class Newsitems extends Component {
  render() {
    let { title, newscontent, ImageUrl, urllink, Author, dates } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "22rem" }}>
          <img
            src={
              ImageUrl
                ? ImageUrl
                : "https://s.yimg.com/ny/api/res/1.2/30R8C9r1oazfRPcCLYwxuQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-07/626b0510-119a-11ed-b79b-567e63421574"
            }
            style={{ height: "140px" }}
            className="card-img-top"
            alt="sorry"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title
                ? title.slice(0, 30)
                : "Sorry we are not abe to provide..."}
              ....
            </h5>
            <p className="card-text">
              {newscontent
                ? newscontent.slice(0, 90)
                : "Realme Pad X  price: The Wi-Fi variant of the Realme Pad X with 4GB of RAM and 64GB of sto....."}
              .....
            </p>
            <footer class="blockquote-footer">
              {" "}
              By {Author ? Author : "Unknown"} at {dates}
            </footer>
            <a
              href={urllink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Go away
            </a>
          </div>
        </div>
      </div>
    );
  }
}
