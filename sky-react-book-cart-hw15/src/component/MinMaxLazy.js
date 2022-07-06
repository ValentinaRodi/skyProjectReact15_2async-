import PropTypes from 'prop-types'

function MinMaxLazy({ min, max, current, onChange, total }) {
  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num))
    onChange(validNum, total)
  }

  function parseCurrentStr(e) {
    const num = parseInt(e.target.value, 10)
    applyCurrent(Number.isNaN(num) ? min : num)
  }
  function handleChange(e) {
    onChange(e.target.value)
  }

  const inc = () => applyCurrent(current + 1)
  const dec = () => applyCurrent(current - 1)

  return (
    <div className="App">
      <button type="button" onClick={dec} className="removeButton">
        -
      </button>
      <input
        type="text"
        value={current}
        onChange={handleChange}
        onBlur={parseCurrentStr}
      />
      <button type="button" onClick={inc} className="addButton">
        +
      </button>
    </div>
  )
}

MinMaxLazy.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
}

MinMaxLazy.defaultProps = {
  min: 0,
}
export default MinMaxLazy