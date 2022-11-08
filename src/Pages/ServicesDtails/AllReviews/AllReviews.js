import React from 'react';

const AllReviews = () => {
    return (
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead></thead>
            <tbody>
              <tr>
                <th>
                  <label>
                    {/* <button
                      onClick={() => handleDelete(_id)}
                      className="btn btn-ghost bg-orange-300"
                    >
                      X
                    </button> */}
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      {/* <div className="rounded w-24 h-24">
                        {orderService?.picture && (
                          <img
                            src={orderService.picture}
                            alt="Avatar Tailwind CSS Component"
                          />
                        )}
                      </div> */}
                    </div>
                    <div>
                      {/* <div className="font-bold">{customer}</div>
                      <div className="text-sm opacity-50">{phone} </div> */}
                    </div>
                  </div>
                </td>
                <td>
                  {/* {serviceName} */}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">{balance} </span> */}
                </td>
                <td>Indigo</td>
                <th>
                  {/* <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs"
                  >
                    {status ? status : "pending"}
                  </button> */}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllReviews;