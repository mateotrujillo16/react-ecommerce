const ByProduct = (props, type) => {
  console.log(props)
  let temp = props.Data.filter(item => item.tag === type);
  return temp;
}

export default ByProduct;