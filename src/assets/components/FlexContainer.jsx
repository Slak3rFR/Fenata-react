import PropTypes from "prop-types";

function FlexContainer(props) {
    const styleFlex = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: "25px",
    };

    return <div style={styleFlex}>{props.children}</div>;
}

FlexContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FlexContainer;