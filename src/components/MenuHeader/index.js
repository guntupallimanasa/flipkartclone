import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../actions';
import './style.css'
/**
* @author
* @function MenuHeader
**/

export const MenuHeader = (props) => {

  const category = useSelector(state => state.categoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  const renderCategories = (categories) => {
    let category = [];

    for (let cate of categories) {
      category.push(<li key={cate.name}>
        {
          cate.parentId ? <a href={`${cate.slug}?cid=${cate._id}&type=${cate.type}`}> {cate.name}</a> :
            <span> {cate.name}</span>
        }
        {cate.children.length > 0 ? (<ul>{renderCategories(cate.children)}</ul>) : null}
      </li>)
    }
    return category;
  }
  return (
    <div className='menuHeader'>
      <ul>
        {
          category.categories.length > 0 ? renderCategories(category.categories) : null
        }
      </ul>
    </div>
  )

}