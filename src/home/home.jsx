import React, { useEffect, useState } from "react";
import "../home/home.css";
import Card from "../card/card";



const Home = () => {
    const [series, setseries] = useState([])
    const [comment, setcommnt] = useState("")
    const seriesfecth = () => {
        fetch("http://localhost:9000/seriesget")
            .then(res => res.json())
            .then(data => setseries(data))



    }


    useEffect(() => {
        seriesfecth()
    })

    const commenlen = comment.length








    const handleChange = (e) => {
        const key = e.target.value || 0
        fetch(`http://localhost:9000/seriessearch/${key}`)
            .then(res => res.json())
            .then(data => {
                if (key) {
                    setseries(data)
                } else {
                    seriesfecth()
                }
            })

    }

    const handleClick = () => {
        if (comment.length < 26 && comment.length > 0) {
            fetch("http://localhost:9000/comment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ commentdata: comment })
            }).then(res => res.json())
                .then(data => {
                    alert(data.mess)
                    setcommnt("")
                })
        } else {
            alert("type 25 word only")
        }



    }







    const [count, setCount] = useState(1)
    const [showPage, setshowPage] = useState(8)
    const value = showPage * count
    const values = value - showPage

    const handleNext = () => {
        if (Math.ceil(series.length / showPage) === count) {
            setCount(count)
        } else {
            setCount(count + 1)
        }
    }
    const handlePrivics = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <>
            <div className="home">


                <div className="tag">
                    <p className="texttag"> WEBSERIES ZONE</p>
                </div>
                <div className="input">
                    <input type="search" placeholder="webseries name" className="inputtxt" onChange={handleChange} />
                </div>
                <hr />
                <div className="flexcard">

                    {series.length === 0 || series == "undefined" ? <div className="widther"><p className="texttag">server error</p></div> :


                        series && series.slice(values, value).map((e, i) => {
                            return <Card data={e} key={i} />

                        })

                    }


                </div>
                <hr />
                <div className="pagenation">
                    <button type="button" className="btn btn-primary" onClick={handlePrivics}>Previous</button>
                    <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
                </div>
                <hr />
                <div className="comm">
                    <textarea cols={20} rows={4} className="comments" placeholder="comments" value={comment} onChange={(e) => setcommnt(e.target.value)} />
                    <br />
                    <p className="comlen">{commenlen}/25</p>
                    <br />
                    <button type="button" className="btn btn-success" onClick={handleClick}>Submit</button>
                </div>

                <div className="ads ">
                    <p className="adstext">**NO ADS WEBSERIES SITE </p>
                </div>
                <div className="ads">
                    <p className="adstext">**DAILY UPDATE NEW SERIES  </p>
                </div>


            </div>
        </>
    )
}
export default Home