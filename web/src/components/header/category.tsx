export default function Category() {
  const catetories = [
    //category
    //ID  number
    //title string
    //items? category[]
    //children? category[]
    {
      ID: 1, title: 'IT·互联网', items: [
        { ID: 1, title: '前端开发' },
        { ID: 2, title: 'java' },
        { ID: 3, title: '产品策划' },
      ],
      children: [
        {
          ID: 2, title: '前沿技术', items: [
            { ID: 4, title: '云计算' },
            
            { ID: 4, title: '云计算' }
          ]
        },
        { ID: 3, title: '互联网产品' },
      ]
    },
    {
      title: '设计·创作', items: ['平面设计', '室内设计', '绘画创作'],
      children: [
        { title: '平面设计', items: ['电商美工', '综合平面设计', '摄影后期', '设计软件'] },
        { title: '环境艺术设计', items: ['室内设计', '建筑设计', '景观设计', '设计软件', '其他'] },
      ],
    },
  ];

  return (
    <div className="category">
      <div className="title-container">
        <i className="icon icon-menu" />
        <span>分类</span>
      </div>
      <div className="list-container">
        <ul className="list">
          {catetories.map(category => (
            <li>
              <div className="content">
                <div className="title">{category.title}</div>
                <div className="sub-title">
                  <ul>
                    {category.items.map(item => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="sub-list">
                <ul className="sub-list-ul">
                  {category.children.map(child => (
                    <li className="sub-list-li">
                      <div className="main">{child.title}</div>
                      <div className="list">
                        <ul>
                          {child.items?.map(item => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}