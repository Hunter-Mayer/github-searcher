import Button from './button'
import Input from './input'

const SearchForm = ({term, setTerm, handleSubmit}) => {
    return (
        <form onSubmit={event => {
        event.preventDefault()
        handleSubmit()
    }}>
        <div className="input-group input-group-lg">
            <Input
            value={term}
            onChange={event => setTerm(event.target.value)}
            name="search"
            className="form-control bg-dark text-;ight"
            placeholder="Search repos by keyword"
            keyword="Search"
            />
            <Button disabled={!term}>Search</Button>
        </div>
            
        </form>
    )
}

export default SearchForm