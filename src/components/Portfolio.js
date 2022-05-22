import {useEffect} from "react";
import {fixPortfolio, galleryFilter, saveItemToLocalStorage, tobiiLightbox} from "../utils"
import data from "../data/data.json";
function Portfolio() {
    useEffect(() => {
        galleryFilter();
        tobiiLightbox();
    },[])

    return (
        <div className="ms-lg-4">
            <div className="row justify-content-center">
                <div className="col-12 filters-group-wrap">
                    <div className="filters-group">
                        <ul className="container-filter list-inline mb-0 filter-options text-center">
                            <li className="list-inline-item categories-name border text-dark rounded active"
                                data-group="all">All
                            </li>
                            {
                                data.settings.category.map(category =>
                                    <li className="list-inline-item categories-name border text-dark rounded" data-group={category.slug}>{category.name}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div id="grid" className="row">
                {
                    data.portfolio.map(portfolio => <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups={'["'+portfolio.category+'"]'}>
                        <div
                            className="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                            <div className="card-body p-0">
                                <a href={"uploads/portfolio/"+portfolio.cover} className="lightbox d-inline-block" title="">
                                    <img src={"uploads/portfolio/"+portfolio.cover} className="img-fluid" alt={portfolio.description}/>
                                </a>
                                <div className="content bg-white p-3">
                                    <h5 className="mb-0"><a href="javascript:void(0)" className="text-dark title">{portfolio.name}</a></h5>
                                    {/*<h6 className="text-muted tag mb-0">Branding</h6>*/}
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <div className="row d-none">
                <div className="col-12 mt-4 pt-2">
                    <ul className="pagination justify-content-center mb-0">
                        <li className="page-item"><a className="page-link" href="javascript:void(0)"
                                                     aria-label="Previous">Prev</a></li>
                        <li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0)" aria-label="Next">Next</a></li>
                    </ul>
                </div>

            </div>

            <div className="mt-4 pt-2 d-none">
                <a href="javascript:void(0)" className="btn btn-primary me-2"><i
                    className="uil uil-user-check"></i> Request a proposal</a>
                <a href="javascript:void(0)" className="btn btn-outline-primary"><i className="uil uil-print"></i> Print
                    CV</a>
            </div>
        </div>
    );
}

export default Portfolio;