 import './App.css'
function App() {

  return (
    <>
  {/* Header component */}
  <header className="header">
    <div className="logo">
      <span className="course">React Workshop - September 2023</span>
    </div>
  </header>
  {/* Main component  */}
  <main className="main">
    {/* Section component  */}
    <section className="card users-container">
      {/* Search bar component */}
      <form className="search-form">
        <h2>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="user"
            className="svg-inline--fa fa-user SearchBar_icon__cXpTg"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
            ></path>
          </svg>
          <span>Users</span>
        </h2>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Please, select the search criteria"
            name="search"
          />
          {/* Show the clear button only if input field length !== 0 */}
          <button className="btn close-btn">
            <i className="fa-solid fa-xmark" />
          </button>
          <button className="btn" title="Please, select the search criteria">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
        <div className="filter">
          <span>Search Criteria:</span>
          <select name="criteria" className="criteria">
            <option value="">Not selected</option>
            <option value="">First Name</option>
            <option value="">Last Name</option>
            <option value="">Email</option>
            <option value="">Phone</option>
          </select>
        </div>
      </form>
      {/* Table component */}
      <div className="table-wrapper">
        {/* Overlap components  */}
        {/* <div class="loading-shade"> */}
        {/* Loading spinner  */}
        {/* <div class="spinner"></div> */}
        {/* 
  No users added yet  */}
        {/* <div class="table-overlap">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="triangle-exclamation"
          class="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
          ></path>
        </svg>
        <h2>There is no users yet.</h2>
      </div> */}
        {/* No content overlap component  */}
        {/* <div class="table-overlap">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="triangle-exclamation"
          class="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
          ></path>
        </svg>
        <h2>Sorry, we couldn't find what you're looking for.</h2>
      </div> */}
        {/* On error overlap component  */}
        {/* <div class="table-overlap">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="triangle-exclamation"
          class="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
          ></path>
        </svg>
        <h2>Failed to fetch</h2>
      </div> */}
        {/* </div> */}
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                First name
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Last name
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Email
                <svg
                  className="icon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Phone
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Created
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Table row component */}
            <tr>
              <td>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="Peter's profile"
                  className="image"
                />
              </td>
              <td>Peter</td>
              <td>Johnson</td>
              <td>peter@abv.bg</td>
              <td>0812345678</td>
              <td>June 28, 2022</td>
              <td className="actions">
                <button className="btn edit-btn" title="Edit">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="pen-to-square"
                    className="svg-inline--fa fa-pen-to-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 532 512"
                  >
                    <path
                      fill="currentColor"
                      d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"
                    ></path>
                  </svg>
                </button>
                <button className="btn delete-btn" title="Delete">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="trash"
                    className="svg-inline--fa fa-trash"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 498 512"
                  >
                    <path
                      fill="currentColor"
                      d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
                    ></path>
                  </svg>
                </button>
                <button className="btn info-btn" title="Info">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="info"
                    className="svg-inline--fa fa-info"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-150 0 512 612"
                  >
                    <path
                      fill="currentColor"
                      d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* New user button  */}
      <button className="btn-add btn">Add new user</button>
      {/* Pagination component  */}
      <div className="pagination position">
        <div className="limits">
          <span>Items per page:</span>
          <select name="limit" className="limit" value={5}>
            <option value={5}>5</option>
            <option value={5}>10</option>
            <option value={5}>15</option>
            <option value={5}>20</option>
          </select>
        </div>
        <p className="pages">1 - 1 of 1</p>
        <div className="actions">
          <button className="btn" title="First Page">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angles-left"
              className="svg-inline--fa fa-angles-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z"
              ></path>
            </svg>
          </button>
          <button className="btn" title="Previous Page">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-left"
              className="svg-inline--fa fa-angle-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
              ></path>
            </svg>
          </button>
          <button className="btn" title="Next Page">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              className="svg-inline--fa fa-angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
              ></path>
            </svg>
          </button>
          <button className="btn" title="Last Page">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angles-right"
              className="svg-inline--fa fa-angles-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
    {/* User details component  */}
    {/* <div class="overlay">
<div class="backdrop"></div>
<div class="modal">
  <div class="detail-container">
    <header class="headers">
      <h2>User Detail</h2>
      <button class="btn close">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
          class="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor"
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
          </path>
        </svg>
      </button>
    </header>
    <div class="content">
      <div class="image-container">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=""
          class="image" />
      </div>
      <div class="user-details">
        <p>User Id: <strong>62bb0c0eda039e2fdccba57b</strong></p>
        <p>
          Full Name:
          <strong> Peter Johnson </strong>
        </p>
        <p>Email: <strong>peter@abv.bg</strong></p>
        <p>Phone Number: <strong>0812345678</strong></p>
        <p>
          Address:
          <strong> Bulgaria, Sofia, Aleksandar Malinov 78 </strong>
        </p>

        <p>Created on: <strong>Wednesday, June 28, 2022</strong></p>
        <p>Modified on: <strong>Thursday, June 29, 2022</strong></p>
      </div>
    </div>
  </div>
</div>
    </div> */}
    {/* Create/Edit Form component  */}
    {/* <div class="overlay">
<div class="backdrop"></div>
<div class="modal">
  <div class="user-container">
    <header class="headers">
      <h2>Edit User/Add User</h2>
      <button class="btn close">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
          class="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor"
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
          </path>
        </svg>
      </button>
    </header>
    <form>
      <div class="form-row">
        <div class="form-group">
          <label for="firstName">First name</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-user"></i></span>
            <input id="firstName" name="firstName" type="text" />
          </div>
        </div>
        <div class="form-group">
          <label for="lastName">Last name</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-user"></i></span>
            <input id="lastName" name="lastName" type="text" />
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-envelope"></i></span>
            <input id="email" name="email" type="text" />
          </div>
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone number</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-phone"></i></span>
            <input id="phoneNumber" name="phoneNumber" type="text" />
          </div>
        </div>
      </div>

      <div class="form-group long-line">
        <label for="imageUrl">Image Url</label>
        <div class="input-wrapper">
          <span><i class="fa-solid fa-image"></i></span>
          <input id="imageUrl" name="imageUrl" type="text" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="country">Country</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-map"></i></span>
            <input id="country" name="country" type="text" />
          </div>
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-city"></i></span>
            <input id="city" name="city" type="text" />
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="street">Street</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-map"></i></span>
            <input id="street" name="street" type="text" />
          </div>
        </div>
        <div class="form-group">
          <label for="streetNumber">Street number</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-house-chimney"></i></span>
            <input id="streetNumber" name="streetNumber" type="text" />
          </div>
        </div>
      </div>
      <div id="form-actions">
        <button id="action-save" class="btn" type="submit">Save</button>
        <button id="action-cancel" class="btn" type="button">
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>
    </div> */}
    {/* Delete user component  */}
    {/* <div class="overlay">
<div class="backdrop"></div>
<div class="modal">
  <div class="confirm-container">
    <header class="headers">
      <h2>Are you sure you want to delete this account?</h2>
      <button class="btn close">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
          class="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor"
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
          </path>
        </svg>
      </button>
    </header>
    <div class="actions">
      <div id="form-actions">
        <button id="action-save" class="btn" type="submit">Delete</button>
        <button id="action-cancel" class="btn" type="button">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
    </div> */}
  </main>
  {/* Footer component  */}
  <footer className="footer">
    <p>This site is designed to be used for training purposes at SoftUni.</p>
  </footer>
</>
  )
}

export default App
