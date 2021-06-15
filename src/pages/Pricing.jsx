import PricingPlan from '../components/Slider/PricingPlan';

export default function Pricing() {
  return (
    <>
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-4 pb-2 mb-5">
        <div className="container py-1">
          <div className="row  align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1
                className="mb-4 mb-md-0 text-white"
                className="sliderMainHeading"
                style={{ fontSize: '2.5rem', marginTop: '6rem' }}
              >
                Pricing Plan
              </h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <a className="btn text-white">Home</a>
                <i className="fas fa-angle-right text-white"></i>
                <a className="btn text-white disabled">Pricing</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PricingPlan></PricingPlan>
    </>
  );
}
