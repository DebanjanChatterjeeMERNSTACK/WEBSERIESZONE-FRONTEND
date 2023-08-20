import React, { useEffect, useState } from "react";
import "./download.css"
import { NavLink, useParams } from "react-router-dom";


const Download = () => {
    const { id } = useParams()
    const [series, setseries] = useState({})


    useEffect(() => {
        fetch(`http://localhost:9000/seriesfilter/${id}`)
            .then(res => res.json())
            .then(data => { setseries(data[0]) })
    })
    return (
        <>

            <div className="download">
                <div className="btn5">
                    <NavLink to={"/"}><button type="button" className="btn btn-success">HOME</button></NavLink>
                </div>
                <div className="downtitle">
                    <p>{series.title}</p> 
                </div>
                <hr />
                <div className="image">
                    {
                        series.image && series.image.slice(0, 1).map((e, i) => {
                            return (

                                <img src={e} className="img3" key={i} />

                            )

                        })
                    }

                </div>
                <hr />
                <div className="txtealin">
                    <p className="name">{series.name}</p>
                    <p className="txt1">Rating: <span>{series.rating}+</span></p>
                    <p className="txt1">Genre: <span>{series.genre}</span></p>
                    <p className="txt1">Language: <span>{series.language}</span></p>
                    <p className="txt1">Quality: <span>{series.quality}</span></p>
                </div>
                <hr />
                <div className="">
                    <p className="text2">Screen Shot</p>
                </div>
                <div className="short">
                    {series.image && series.image.slice(1, 4).map((e, i) => {
                        return (
                            <img src={e} className="image1" key={i} />
                        )

                    })
                    }
                </div>
                <hr />
                <div >
                    <p className="text2">Download Now</p>
                </div>
                <div className="btn4">
                    {
                        series.file && series.file.slice(0, 0).map((e, i) => {
                            return (
                                <a href={e} download={true} key={i}> <button type="button" className="btn btn-success">Download</button></a>
                            )
                        })
                    }
                    <a href={series.file} download={true}> <button type="button" className="btn btn-success">Download</button></a>
                </div>

            </div>
        </>
    )
}
export default Download