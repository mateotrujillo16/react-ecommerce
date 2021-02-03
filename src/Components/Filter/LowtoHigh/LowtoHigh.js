const LowtoHigh = (props) => {
  //creating low to high filter
  props.Data.sort(function (a, b) { //take a function to compare two things
    if (parseInt(a.price) > parseInt(b.price)) {
      return 1
    }
    if (parseInt(a.price) < parseInt(b.price)) {
      return -1
    }
  })
}

export default LowtoHigh;