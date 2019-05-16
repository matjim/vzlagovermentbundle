<?php

namespace Tecnocreaciones\Vzla\GovernmentBundle\Model;

/**
 *
 * @author Carlos Mendoza <inhack20@tecnocreaciones.com>
 */
interface UserInterface
{
    /**
     * Set firstName
     *
     * @param string $firstName
     * @return User
     */
    public function setFirstName($firstName);

    /**
     * Get firstName
     *
     * @return string 
     */
    public function getFirstName();

    /**
     * Set lastName
     *
     * @param string $lastName
     * @return User
     */
    public function setLastName($lastName);

    /**
     * Get lastName
     *
     * @return string 
     */
    public function getLastName();
    
    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     * @return User
     */
    public function setCreatedAt(\DateTime $createdAt);

    /**
     * Get createdAt
     *
     * @return \DateTime 
     */
    public function getCreatedAt();

    /**
     * Set updatedAt
     *
     * @param \DateTime $updatedAt
     * @return User
     */
    public function setUpdatedAt(\DateTime $updatedAt);

    /**
     * Get updatedAt
     *
     * @return \DateTime 
     */
    public function getUpdatedAt();
}
