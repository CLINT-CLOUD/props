import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageUrl
}) => {
  const cardStyle = {
    width: '20rem',
    margin: '15px',
    display: 'inline-block',
    verticalAlign: 'top',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    border: '3px solid #5a4d7a',
  };

  const titleStyle = {
    fontWeight: '700',
    fontSize: '1.5rem',
    marginBottom: '0.3rem',
    textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
  };

  const textStyle = {
    fontSize: '1rem',
    margin: '3px 0',
    textShadow: '0.5px 0.5px 2px rgba(0,0,0,0.5)'
  };

  const jerseyStyle = {
    fontWeight: '700',
    fontSize: '1.2rem',
    color: '#ffcc00',
    textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
    marginTop: '10px'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        alt={`${name} photo`} 
        style={{borderRadius: '15px 15px 0 0', maxHeight: '250px', objectFit: 'cover'}}
      />
      <Card.Body>
        <Card.Title style={titleStyle}>{name}</Card.Title>
        <Card.Text style={textStyle}><strong>Team:</strong> {team}</Card.Text>
        <Card.Text style={textStyle}><strong>Nationality:</strong> {nationality}</Card.Text>
        <Card.Text style={jerseyStyle}>#{jerseyNumber}</Card.Text>
        <Card.Text style={textStyle}><strong>Age:</strong> {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: "N/A",
  imageUrl: "https://via.placeholder.com/250x250?text=No+Image"
};

export default Player;
