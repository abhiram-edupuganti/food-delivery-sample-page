import React from 'react'

const Cards = () => {
    return (
        <div>
            <div className="card m-3" style={{ "width": "18rem" }}>
                <img src="momos.jpeg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h5 className="card-title">Card title</h5>
                    {/* <Link to="#" className="btn btn-success">Go somewhere</Link> */}
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            }
                            )}
                        </select>
                        <select className="m-2 h-100 bg-success">
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline fs-5 h-100">Total Price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards