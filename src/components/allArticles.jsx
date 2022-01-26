import BlogCardLarge from "./blogCardLarge"
import LoadingIcon from "./loadingIcon"
import { TextField, InputAdornment, Button } from "@mui/material"
import { useEffect, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import FilterTheme from "./filterTheme";
import { styled } from '@mui/material/styles';


const RoundedTextField = styled(TextField)(({ theme }) => ({
    roundedBorder: {
        borderRadius: "100px",
    },
    '& fieldset': {
        borderRadius: "100px"
    }
}));

const AllArticles = ({header, posts, getPosts, edit = false, handleOpen, deletePost}) => {

    // console.log(posts)

    const [searchFilter, setSearchFilter] = useState({search: "", filter: ""})
    const [filteredPosts, setFilteredPosts] = useState(null)

    const handleChange = (event) => {
        const mySearchFilter = {...searchFilter}
        mySearchFilter[event.target.name] = event.target.value
        setSearchFilter(mySearchFilter)
        console.log(mySearchFilter)
    }


    //original code!  
    const mapArticles = () => {

        // console.log(posts)

        let myPosts = []

        if (searchFilter.filter === "") 
        {
            myPosts = posts
        }

        else {
            myPosts = posts.filter(post => post.theme === searchFilter.filter)
        }

        if (searchFilter.search !== "" & myPosts.length > 0) {
            const searchResults = myPosts.filter(post => post.content.toLowerCase().includes(searchFilter.search.toLowerCase()))
            myPosts = searchResults
        }

        const mapMyPosts = myPosts.map((post) => {
            return <BlogCardLarge key={`large-card-${post.id}`}deletePost={deletePost} handleOpen={handleOpen} edit={edit} post={post}/>
        })

        return mapMyPosts
        
    }

    // const filterPosts = () => { 
    //     let myPosts = {...filterPosts}

    //     if (searchFilter.filter === "") 
    //     {
    //         myPosts = posts
    //     }

    //     else {
    //         myPosts = posts.filter(post => post.theme === searchFilter.filter)
    //     }

    //     setFilteredPosts(myPosts)
    // }

    // const searchPosts = () => {
    //     let myPosts = {...filterPosts}

    //     if (searchFilter.search !== "" & myPosts.length > 0) {
    //         const searchResults = myPosts.filter(post => post.content.toLowerCase().includes(searchFilter.search.toLowerCase()))
    //         myPosts = searchResults
    //     }
    // }

    

    

    


    // const mapArticles = () => {

    //     console.log(filteredPosts)

    //     const mapMyPosts = filteredPosts.map((post) => {
    //         return <BlogCardLarge key={`large-card-${post.id}`}deletePost={deletePost} handleOpen={handleOpen} edit={edit} post={post}/>
    //     })

    //     return mapMyPosts
        
    // }

    // useEffect(() => {
    //     if(posts) {
    //         console.log('hi')
    //         console.log(posts)
    //         setFilteredPosts(posts)
    //     }
    //     else {
    //         console.log('bye')
    //         getPosts()
    //     }
    // }, [])

    return (
        <div className="gray-bg all-cards" id="all-articles">
            <h3 className="flex-center no-margin add-padding">{header}</h3>
            {/* </Typography> */}
            <form className="flex-center flex-wrap"> 
                <FilterTheme handleChange={handleChange} filter={searchFilter.filter} className="rounded-btn" id="filter-theme-div" />
                <RoundedTextField value={searchFilter.search} name="search" onChange={handleChange} className="margin-ten white-bg-br rounded-btn" size="small" placeholder="Search for a topic..." id="filter-search-div" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" className="rounded-btn" >
                            <SearchIcon className="rounded-btn"/>
                        </InputAdornment>
                    ),
                    }}
                />
                {/* <div className="blue-btn horizontal-margin filter-search-btn">Search</div> */}
            </form>
            <div className="flex-center flex-wrap">
                {/* <BlogCardLarge />
                <BlogCardLarge />
                <BlogCardLarge />
                <BlogCardLarge /> */}
                {posts ? mapArticles(): <LoadingIcon />}
            </div>
        </div>
    )
}

export default AllArticles