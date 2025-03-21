import React, { memo } from 'react'
import avatar from '../../assets/avatar-default.png'
import moment from 'moment'
import { renderStarFromNumber } from '../../ultils/helpers'

const Comment = ({ image = avatar, name = 'Anonym', comment, updatedAt, star }) => {
    return (
        <div className='flex gap-4'>
            <div className=' flex-none'>
                <img
                    src={image}
                    alt='avatar'
                    className='w-[30px] h-[30px] object-cover rounded-full'
                />
            </div>

            <div className='flex flex-col flex-auto'>
                <div className='flex justify-between items-center'>
                    <h3 className='font-semibold'>{name}</h3>
                    <span className='text-xs italic'>{moment(updatedAt)?.fromNow()}</span>
                </div>

                <div className='mt-4 text-sm flex flex-col gap-2 pl-4 border border-gray-300 py-2 bg-gray-100'>
                    <span className='flex items-center gap-2'> 
                        <span className='font-semibold'>Vote: </span>
                        <span className='flex gap-2 items-center'>{renderStarFromNumber(star)?.map((el, index) => (
                            <span key={index}>{el}</span>
                        ))}</span>
                    </span>

                    <span className='flex gap-2'> 
                        <span className='font-semibold'>Comment: </span>
                        <span className='flex gap-1 items-center'>{comment}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default memo(Comment)
