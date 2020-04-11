# COVID-19_hospital_api

## Getting started

- If you don't already have one, [create a GitHub account](https://github.com/join).
- Open the [Node.js core repository web page](https://github.com/nodejs/node).
- Use the "Fork" button to fork the repository:![Image](http://nodetodo.org/getting-started/zfork.png)
- On the page _for your own fork_, use the "Clone or download" button and copy the URL for cloning to your clipboard:![Screenshot](http://nodetodo.org/getting-started/zclone.png)
- On the command line, in your home directory or a directory you have for projects, run:

```console
git clone <paste that URL here>;
```

- When that is done:

```console
cd node
```

- Then:

```console
git remote add upstream https://github.com/nodejs/node.git
```

- Then:

Install the required packages and run the project by npm start command.

- Then:

Open Postman, to REGISTER a new doctor make a POST request with URL localhost:8000/doctors/register with raw data   
{ "email":"emailId","password":"password","name":"name" } .

- Then:

To LOGIN make a POST request with URL localhost:8000/doctors with raw data                                             
{ "email":"emailId","password":"password" } .

- Then:

To ADD a new patient make a POST request with URL localhost:8000/register_patient and click on Authorization and select BearerToken and 
copy paste the bearer token which is generated while doctor logining in and with raw data                                   
{"phone":"phone number","name":"name","doctor":"doctor Id"} we will have to give doctor id manually by coping doctor_id from doctor database.

- Then:

To ADD patient's report make a POST request with URL localhost:8000/patients/patientId/create_report and click on Authorization and select BearerToken and 
copy paste the bearer token which is generated while doctor logining in and with raw data                                   
{"status":"status(can only provide either of Negative,Travelled-Quarantine,Symptoms-Quarantine,Positive-Admit)","doctor":"doctor Id","patient":"patient id","date":"date"}
we will have to give doctor id and patient id manually by coping doctor_id from doctor database and patient id from patient database.

- Then:

To VIEW all reports make a GET request with URL localhost:8000/patients/patientId/all_reports and click on Authorization and select BearerToken and 
copy paste the bearer token which is generated while doctor logining in.

- Then:

To VIEW all the reports of patients filtered by a specific status make a GET request with URL 
localhost:8000/patients/reports/status(Negative,Travelled-Quarantine,Symptoms-quarantine,Positive-Admit) and click on Authorization and select BearerToken and 
copy paste the bearer token which is generated while doctor logining in.


