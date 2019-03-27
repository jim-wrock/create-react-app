import React, { Fragment } from "react";

// const Avatar = props => {
//     return <div>
//         <h3>{props.firstName}</h3>
//         <h3>{props.lastName}</h3>
//         <img src={props.image} alt=""/>
//     </div>
// };

//props

// class Character extends Component {
//     render() {

//     }
// }

// class Character extends Component {
//     constructor(props) {
//         super(props)
//         state
//     }
//destr

const Avatar = ({ firstName, lastName, image, star }) => (
  <div
    style={{
      backgroundColor: star ? "yellow" : "red"
    }}
  >
    <h3>
      {" "}
      Hello {firstName} {lastName}
    </h3>
    {image ? (
      <img src={image} className="avatar-img" alt="" />
    ) : (
      <img
        src="https://www.drupal.org/files/issues/default-avatar.png"
        className="avatar-img"
        alt=""
      />
    )}
  </div>
);

// //<>
// <Fragment>
//     <div>
//         <p>shit</p>
//     </div>

//     <div>
//         <p>fuck</p>
//     </div>
// </Fragment>
// //</>

// const App = () => <Test {...Avatar}/>

export default Avatar;
