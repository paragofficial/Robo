import React from 'react'

export default function Individual(props) {
  return (
    <>
      <div className="card" style={{width: "18rem", padding: "30px",margin: "30px",backgroundColor: "white", borderRadius:"18px", boxShadow: "15px 15px 5px  	#808080",color: "#1f0660" }}>
            <img className="card-img-top" src={props.indiphoto} alt="Card image cap" style={{ borderRadius:"18px"}}/>
              <div className="card-body">
                {/* <h3 className="card-title"><strong>{props.name}</strong></h3> */}
                <p><strong>  <a href={props.profile} target="_blank" style={{color: "#1f0660", fontSize: "25px"}}>{props.name}</a></strong></p>
                <p className="card-text">{props.position}</p>
              </div>
          </div>
    </>
  )
}
