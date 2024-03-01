import axios from "../../api/axios";

class EditProfileService {
    static async fetchData() {
        try {
            const token = localStorage.getItem('accessToken');
            const axiosConfig = {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            };

            const response = await axios.post("/user-details", {}, axiosConfig);

            const data = {
                firstName: response.data.data.name,
                lastName: response.data.data.profile_photo,
                role: response.data.data.role.name
            };

            if (data) {
                console.log("user details", response.data.data.name);
            } else {
                console.log('failed', response.data);
            }

            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    static async initialize() {
        this.data = await this.fetchData();
        this.firstName = this.data.firstName;
        this.lastName = this.data.lastName;
        this.role = this.data.role;
    }

    static editDataFrom(firstName, lastName, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }

    static returnId() {
        let data = {
            firstName: this.firstName,
            lastName: this.lastName,
            role: this.role
        };
        return data;
    }
}

export default EditProfileService;

// Call initialize somewhere in your code
EditProfileService.initialize();
