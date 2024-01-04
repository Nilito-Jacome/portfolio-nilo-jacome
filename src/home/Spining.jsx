

function Spining( { text } ) {
    const ind = text.length;
    const deg = 360 / ind;
  return (
    <div className="spining">
        
        <div className="spining_text">
            <p>{text.split("").map((letra, i)=>(
                <span
                key={i}
                style={{
                    transform:`rotate(${deg * i}deg)`
                }}
                >
                 {letra}   
                </span>
            ))}</p>
        </div>
    </div>
  )
}

export default Spining;