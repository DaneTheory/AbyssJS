import React  from 'react'


export function ListItemsOne(props) {
  return (
    <div>
      <h4>Container One List</h4>
      <div className="list__main">
        {props.items.map(item => {
          return (
            <div key={item} className="list__item">
                  {item}
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
