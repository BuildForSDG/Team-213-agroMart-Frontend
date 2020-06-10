import React from 'react';


const Categories = () => {
  return (
      <form classNameName="form-horizontal">
          <div className="form-group">
              <h6>Categories</h6>
              <div className="col-sm-10">
                  
                  <div className="checkbox">
                      <label>
                          <input type="checkbox" /> Fruits and Nuts
                        </label>
                  </div>
                  <div className="checkbox">
                      <label>
                          <input type="checkbox" /> Vegetables
                        </label>
                  </div>
                  <div className="checkbox">
                      <label>
                          <input type="checkbox" /> Legumes
                        </label>
                  </div>
                  <div className="checkbox">
                      <label>
                          <input type="checkbox" /> Cereals and Grains
                        </label>
                  </div>
                  <div className="checkbox">
                      <label>
                          <input type="checkbox" /> Roots and Tuber
                        </label>
                  </div>
                  <div className="checkbox">
                      <label>
                          <input type="checkbox" /> Meat
                        </label>
                  </div>
                  <div className="checkbox">
                      <label>
                          <input type="checkbox" /> Others
                        </label>
                  </div>
                  
              </div>
          </div>
      </form>
  );
};
export default Categories;
