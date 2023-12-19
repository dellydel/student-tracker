import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchStudentById = async (studentId) => {
	return axios.get(
		`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/students/${studentId}`,
	);
};

export const useStudentByIdData = (studentId) => {
	return useQuery({
		queryKey: ["student", studentId],
		queryFn: () => fetchStudentById(studentId),
		select: (data) => data.data.map((student) => student),
	});
};
