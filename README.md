Acme Application consists of 4 parts :
A. AcmeApi
B. Acme Database (MongoDb)
C. Acme Dashboard Webapp
D. Acme Device Webapp

# Running the Project

A. Install Docker on your device
--A.1 For Linux, use `apt get` to install docker
--A.2 For Windows, install `WSL2`, a linux image and then `Docker`
B. Clone the Repository
C. Run `docker-compose up -d` to run the application (teminal or powershell/cmd) in detached mode.
D. Open `localhost:4100` for `Acme Dashboard` and `localhost:4200` for `Acme Device App`

# Usage

Use AcmeDevice Application to perform CRUD operations for device and the changes are propagated to Acme Dashboard in real-time.
