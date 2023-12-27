import React from 'react'
import './AddPost.css'

type Props = {}

const AddPost = (props: Props) => {
    return (
        <div className='AddPost'>
            <div className=''>
                <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/412301073_18221027986264772_3700891993751091064_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFMeHZftwkRaVfZ_cD6fuRpsOFQroSP0ROw4VCuhI_RE4yhE2yOXHSmNZKCcacAS_0QUT16Y-9x4CtAWB1CALIr&_nc_ohc=QDazgCo2DqEAX8IhZlW&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDno9d40oolH32IjtYamiyYB40SpPLGfKAjCgMieYm9rw&oe=6590F8BE" />
                <input placeholder='Bạn đang nghĩ gì?' />
            </div>
            <div>
                <button>livestream</button>
                <button>image/video</button>
                <button>story</button>
            </div>
        </div>
    )
}

export default AddPost