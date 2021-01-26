
const HightoLow = (props) => {

  props.Data.sort(function (a, b) { //take a function to compare two things
    if (parseInt(a.price) < parseInt(b.price)) {
      return 1
    }
    if (parseInt(a.price) > parseInt(b.price)) {
      return -1
    }
  })
}

export default HightoLow;