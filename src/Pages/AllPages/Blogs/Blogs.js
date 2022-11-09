import React from 'react';

const Blogs = () => {
    return (
      <div>
        <div>
          <div className='mx-auto w-3/4'>
            <h3 className="text-3xl text-orange-500">
              How Difference between SQL and NoSQL?
            </h3>
            <h6>
              {" "}
              SQL or relational models work better with structured data. This is
              because structured data is easy to search and analyze, much like
              data that is laid out in a table with columns and rows. NoSQL
              models make sense for less structured data sets because it doesn’t
              rely on a predefined model to analyze the data.NoSQL models make
              sense for less structured data sets because it doesn’t rely on a
              predefined model to analyze the data.SQL databases use standard
              Structured Query Languages, as the name suggests. SQL is an
              industry-standard and very powerful language to execute complex
              queries.NoSQL database has dynamic schema for unstructured data.
              The data stored in a NoSQL database is not structured. Data could
              be stored as document-oriented, column oriented, graph-based or
              organized as a Key-Value store. The syntax can vary from database
              to database.
            </h6>
          </div>
        </div>
      </div>
    );
};

export default Blogs;