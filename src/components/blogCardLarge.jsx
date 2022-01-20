import {Link} from 'react-router-dom '

const BlogCardLarge = ({post, edit = false}) => {

    console.log(edit)
    // theme border will likely need to be written in JS to make the color dynamic based on theme
    if(post){
    // console.log(post)
    const {id, title, subtitle, content, theme} = post

    // console.log(id, title, subtitle, content, theme)
    const CreateCard = () => {
        return (
                <div key={`large-card-${id}`}className="blog-card-large">
                    <Link to={`/blog/${id}`} className="color-black">
                    <img className="card-image-large" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
                    <div className="large-card-bottom">
                        <p className="theme-border large-card-text">{theme}</p>
                        <b><p className="large-card-text">{title}</p></b>
                        {/* <p className="theme-border large-card-text">Theme</p> */}
                        <p className="large-card-published">Firstname Lastname 	&#8226; ##/##/####</p>
                        {edit ? <Link to={`/edit/${id}`}><div className="empty-btn horizontal-margin flex-center">Edit</div></Link> : null}
                    </div> 
                    </Link>
                </div>
            
        )
    }
    return (
        <div className="flex-center">
            <CreateCard />
        </div>
    )

    }
    // const CreateCards = () => {
    //     return (
    //             <div className="blog-card-large">
    //                 <Link to="/blog" className="color-black">
    //                 <img className="card-image-large" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
    //                 <div className="large-card-bottom">
    //                     <p className="theme-border large-card-text">Theme</p>
    //                     <b><p className="large-card-text">Name of the blog</p></b>
    //                     {/* <p className="theme-border large-card-text">Theme</p> */}
    //                     <p className="large-card-published">Firstname Lastname 	&#8226; ##/##/####</p>
    //                 </div> 
    //                 </Link>
    //             </div>
            
    //     )
    // }

    // return (
    //     <div className="flex-center">
    //         <CreateCards />
    //     </div>
    // )
    return null

}

export default BlogCardLarge