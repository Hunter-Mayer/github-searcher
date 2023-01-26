import Button from './button'
import Input from './input'
import Row from './row'

const SearchForm = () => {
    return (
        <form>
            <Input
            value={term}
            onChange={event => setTerm(event.target.value)}
            name="search"
            className="form-control bg-dark text-;ight"
            placeholder="Search repos by keyword"
            keyword="Search"
            />
            <Button>Search</Button>
        </form>
    )
}

export default SearchForm