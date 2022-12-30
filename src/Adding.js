import React from "react";

const Adding = ({ jobs, setJobs }) => {
  const initialState = {
    id: "",
    order: "",
    title: "",
    dates: "",
    duties: [],
    duty1: "",
    duty2: "",
    duty3: "",
    company: "",
  };
  const [element, setElement] = React.useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElement((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addingElement = (e) => {
    e.preventDefault();
    element.id = jobs.length;
    element.order =
      jobs.sort((a, b) => {
        return b.year - a.year;
      })[0].order + 1;
    element.duties = element.duties.concat(
      element.duty1,
      element.duty2,
      element.duty3
    );
    element.company = element.company.toUpperCase();
    console.log({ element });

    setJobs(jobs.concat(element));
    setElement(initialState);
  };
  return (
    <>
      <form className="myForm" onSubmit={addingElement}>
        <label htmlFor="title">TITLE:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={element && element.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="dates">DATES:</label>
        <input
          id="dates"
          type="text"
          name="dates"
          placeholder="e.g. May 2014 - September 2015"
          value={element && element.dates}
          onChange={handleChange}
          required
        />

        <label htmlFor="company">COMPANY:</label>
        <input
          id="company"
          type="text"
          name="company"
          value={element && element.company}
          onChange={handleChange}
          required
        />

        <label htmlFor="duty1">DUTY1:</label>
        <input
          id="duty1"
          type="text"
          name="duty1"
          value={element && element.duty1}
          onChange={handleChange}
          required
        />

        <label htmlFor="duty2">DUTY2:</label>
        <input
          id="duty2"
          type="text"
          name="duty2"
          value={element && element.duty2}
          onChange={handleChange}
          required
        />

        <label htmlFor="duty3">DUTY3:</label>
        <input
          id="duty3"
          type="text"
          name="duty3"
          value={element && element.duty3}
          onChange={handleChange}
          required
        />

        <button className="btn" type="submit">
          Add Element
        </button>
      </form>
    </>
  );
};

export default Adding;
