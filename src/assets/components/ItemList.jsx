import Item from "./Item";
import FlexContainer from "./FlexContainer";
import PropTypes from "prop-types";

function ItemList(props) {
return (
    <div>
    <h2>{props.greeting}</h2>
    <FlexContainer>
        {props.products.map((item) => (
        <Item
            key={item.id}
            product={item}
        />
        ))}
    </FlexContainer>
    </div>
    );
}

ItemList.propTypes = {
    greeting: PropTypes.string.isRequired, 
    products: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    })
    ).isRequired,
};

export default ItemList;