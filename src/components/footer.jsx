import Subscribe from "./subscribe"

const Footer = () => {
    return (
        <div className="footer">
            <Subscribe />
            <div className="footer-text">
                <h4>App Name</h4>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h5 className="no-margin">Column 1</h5>
                        <h5 href="" className="no-margin no-weight">Item 1</h5>
                        <h5 href="" className="no-margin no-weight">Item 2</h5>
                        <h5 href="" className="no-margin no-weight">Item 3</h5>
                        <h5 href="" className="no-margin no-weight">Item 4</h5>
                    </div>
                    <div className="footer-column">
                        <h5 className="no-margin">Column 2</h5>
                        <h5 href="" className="no-margin no-weight">Item 1</h5>
                        <h5 href="" className="no-margin no-weight">Item 2</h5>
                        <h5 href="" className="no-margin no-weight">Item 3</h5>
                        <h5 href="" className="no-margin no-weight">Item 4</h5>
                    </div>
                    <div className="footer-column">
                        <h5 className="no-margin">Column 3</h5>
                        <h5 href="" className="no-margin no-weight">Item 1</h5>
                        <h5 href="" className="no-margin no-weight">Item 2</h5>
                        <h5 href="" className="no-margin no-weight">Item 3</h5>
                        <h5 href="" className="no-margin no-weight">Item 4</h5>
                    </div>
                    <div className="footer-column">
                        <h5 className="no-margin">Column 4</h5>
                        <h5 href="" className="no-margin no-weight">Item 1</h5>
                        <h5 href="" className="no-margin no-weight">Item 2</h5>
                        <h5 href="" className="no-margin no-weight">Item 3</h5>
                        <h5 href="" className="no-margin no-weight">Item 4</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer