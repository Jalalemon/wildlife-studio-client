import React from 'react';
import UseTitle from '../../../assets/UseTitle';

const Blogs = () => {
    UseTitle('blogs')
    return (
      <div>
        <div className='my-8'>
          <div className="mx-auto w-3/4">
            <h3 className="text-2xl text-orange-500">
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
          <div className="mx-auto w-3/4">
            <h3 className="text-2xl text-orange-500">
              What is JWT, and how does it work?
            </h3>
            <h6>
              JWTs are an excellent fit for REST API authentication. But as a
              relatively new pattern, most implementations contain some large
              security holes. Part two of this series addresses some of the
              security concerns around a typical implementation of JWT
              authentication, as well as one potential solution to those
              concerns.A JWT’s characteristics make it a great choice for
              token-based authentication. We want a lightweight package, since
              it will be included on every single request to our REST API. It
              also must be tamper-proof, so that the identity claim cannot be
              altered in transit or spoofed outright.
            </h6>
          </div>
          <div className="mx-auto w-3/4">
            <h3 className="text-2xl text-orange-500">
              What is the difference between javascript and NodeJS?
            </h3>
            <h6>
              {" "}
              Node.js is a single-threaded, js process has seven threads in
              total: one main thread for executing JavaScript, four Node. js
              threads, and two V8 threads. open-source, cross-platform runtime
              environment for building fast and scalable server-side and
              networking applications. It runs on the V8 JavaScript runtime
              engine, and it uses event-driven, non-blocking I/O architecture,
              which makes it efficient and suitable for real-time applications.
            </h6>
          </div>
          <div className="mx-auto w-3/4">
            <h3 className="text-2xl text-orange-500">
              How does NodeJS handle multiple requests at the same time?
            </h3>
            <h6>
              Why do we need parallel? to the rescue The task at hand Execution
              scenarios Scenario 1 - Synchronous execution without worker
              threads Scenario 2 - Asynchronous execution with one worker thread
              Scenario 3 - Parallel execution with two worker threads Final
              notes Parallel processing in Node.js using worker threads Node.js
              is one of the most preferred technologies out there to build
              real-time web applications due to its non-blocking, event-driven
              and, single-threaded nature. Node.js was built with an intention
              to develop applications that can efficiently handle I/O intensive
              operations. Why do we need parallel processing?
            </h6>
          </div>
        </div>
      </div>
    );
};

export default Blogs;