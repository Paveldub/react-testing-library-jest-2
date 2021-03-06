import './Filter.css'

export const Filter = ({ filters, setFilters }) => {

    return (
        <div className="pet-filter-container">
            <div className="filter-container">
                <label htmlFor="favourite">Favourite</label>
                <select id="favourite" className="form-select" name="favourite" onChange={(e) => {
                     setFilters({
                        ...filters,
                        favoured: e.target.value
                    })
                }}>
                    <option value="any">Any</option>
                    <option value="favoured">Favoured</option>
                    <option value="not favoured">Not favoured</option>
                </select>
            </div>
            <div className="filter-container">
                <label htmlFor="gender">Gender</label>
                <select id="gender" className="form-select" name="gender" onChange={((e) => {
                    setFilters({
                        ...filters,
                        gender: e.target.value
                    })
                })}>
                    <option value="any">Any</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        </div>
    )
}