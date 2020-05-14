FROM mongo:latest

ADD db-setup.sh /tmp/db-setup.sh
ADD mongo-init.js /tmp/mongo-init.js

RUN chmod +x /tmp/db-setup.sh
RUN chmod +x /tmp/mongo-init.js

CMD ["/tmp/db-setup.sh"]