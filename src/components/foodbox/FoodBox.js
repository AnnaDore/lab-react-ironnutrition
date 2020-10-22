import React from 'react';


export default function FoodBox(props) {


/*   addToList = () => {
    console.log("dodo")
  } */

   function sayHello() {
    console.log(props.item)
  } 

  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.item.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.item.name}</strong> <br />
                <small>{props.item.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" defaultValue={props.item.quantity} />
              </div>
              <div className="control">
                <button onClick={sayHello} className="button is-info" type="submit">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
