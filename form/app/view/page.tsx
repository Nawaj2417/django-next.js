"use client"
import { useEffect, useState } from 'react';

const Page = () => {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    async function fetchAdmissions() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/admissions/');
        if (response.ok) {
          const data = await response.json();
          setAdmissions(data);
        } else {
          console.error('Failed to fetch admissions');
        }
      } catch (error) {
        console.error('Error fetching admissions:', error);
      }
    }

    fetchAdmissions();
  }, []);

  return (
    <div>
      <h1>Admissions</h1>
      <ul>
        {admissions.map((admission) => (
          <li>
            {admission.first_name} {admission.last_name};
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
