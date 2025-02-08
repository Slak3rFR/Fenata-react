import PropTypes from "prop-types";

function FlexContainer({ children, className = "" }) {
    return (
        <div className={`max-w-7xl mx-auto px-4 mt-20 ${className}`}>
            <div className="flex flex-wrap justify-center gap-6">
                {children}
            </div>
        </div>
    );
}

FlexContainer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default FlexContainer;