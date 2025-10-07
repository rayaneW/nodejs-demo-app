# Gebruik een officiële Node.js LTS image als basis
FROM node:18

# Stel de werkdirectory in binnen de container
WORKDIR /app

# Kopieer package.json en package-lock.json (indien aanwezig)
COPY package*.json ./

# Installeer afhankelijkheden
RUN npm install --production

# Kopieer de rest van de applicatiebestanden
COPY . .

# Expose de poort (pas aan indien jouw app een andere poort gebruikt)
EXPOSE 3000

# Start de applicatie
CMD ["npm", "start"]
